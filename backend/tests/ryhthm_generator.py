#!/usr/bin/env python
# -*- coding: utf-8 -*-

import re
from pkg_resources import resource_filename as rf
from collections import defaultdict
from typing import Set, List, Dict
from chrhyme.parser import word_parser

phrase_dict = {}
with open(rf('chrhyme', 'data/phrase_dict.txt'), 'r', encoding="utf-8") as f:
    for line in f:
        items = line.strip().split('\t')
        phrase_dict[tuple(items[0].split())] = items[1].split()


def generate_rhythms():
    while 1:
        user_input = input('◼︎ 请输入一个你想押韵的词(按回车退出): ')
        if user_input:
            word = prune_word(user_input)
            if word:
                num_char = len(word)

                cs = input('\t-是否押声母？例如对于"欢喜"，押"还席"不押"惯技"。\n\t 请输入要押声母的字的位置\n\t (0-不押；1-押"欢"；2-押"喜"；12-押"欢喜"): ')
                vs = input('\t-是否押全韵母？例如对于"欢喜"，押"端倪"不押"叹息"。\n\t 请输入要押全韵母的字的位置\n\t (0-不押；1-押"欢"；2-押"喜"；12-押"欢喜"): ')
                c_ids = check_positions(cs, num_char)
                v_ids = check_positions(vs, num_char)

                pinyins = word_parser(word)
                candidates = get_candidates(word, pinyins, num_char, c_ids, v_ids)
                if candidates:
                    display_results(candidates)
                else:
                    print('>>> 太可惜了，没有适合押韵的词！请尝试分解押韵，例如将"光明磊落"分为"光明"和"磊落"分别进行查询。')
        else:
            break


def prune_word(word):
    valid_word = "".join(re.findall(r'[\u4E00-\u9FA5]+', word))
    if 0 < len(valid_word) < 5:
        return valid_word
    else:
        print('  词长不合法，请输入一个词长为1至4的汉字词语/短语。')
        return ''


def get_candidates(word, pinyins, num_char, c_ids, v_ids) -> Dict[int, List[str]]:
    candidates = defaultdict(list)

    if num_char == 1:
        return single_rhyme(word, pinyins, candidates, c_ids, v_ids)

    return multi_rhyme(word, pinyins, num_char, candidates, c_ids, v_ids)


def single_rhyme(target_word, pinyins, candidates, c_ids, v_ids):
    print('单押检索较慢，请稍等...')
    target_vowel = pinyins[0][1][-1]
    for k, v in phrase_dict.items():
        if k[-1] == target_vowel:
            for word in v:
                word_pys = word_parser(word)
                if word[-1] != target_word \
                        and match_cv(word_pys[-1:], pinyins, c_ids, v_ids) \
                        and word not in candidates[len(word)]:
                    candidates[len(word)].append(word)
    return candidates


def multi_rhyme(target_word, pinyins, num_char, candidates, c_ids, v_ids):
    hash_vowels = tuple([pinyin[1][-1] for pinyin in pinyins])

    try:
        basic_candidates = phrase_dict[hash_vowels]
    except KeyError:
        return candidates

    parsed_candidates = [(word, word_parser(word)) for word in basic_candidates]

    for word, word_pinyins in parsed_candidates:
        if word[-num_char:] != target_word \
                and match_cv(word_pinyins[-num_char:], pinyins, c_ids, v_ids):
            candidates[len(word)].append(word)

    return candidates


def check_positions(ps: str, num_char: int) -> Set[str]:
    if '0' in ps:
        return set()

    else:
        p_ids_str = "".join(re.findall(r'\d+', ps))
        if p_ids_str:
            return {num_char - 1 if int(p) >= num_char else int(p) - 1 for p in p_ids_str}
        return set()


def match_cv(word_pinyins, target_pinyins, c_ids, v_ids) -> bool:
    for c in c_ids:
        # if consonant of target pinyin is empty, it matches any consonant in the word pinyin
        if target_pinyins[c][0] and word_pinyins[c][0] != target_pinyins[c][0]:
            return False

    for v in v_ids:
        word_v = word_pinyins[v][1]
        target_v = target_pinyins[v][1]
        # if vowel of target pinyin is single, only need to check it against with the last vowel of word_v
        if len(target_v) == 1 and word_v[-1] != target_v[-1]:
            return False
        elif len(target_v) == 2 and "".join(word_v) != "".join(target_v):
            return False

    return True


def display_results(candidates):
    lens = sorted(candidates.keys())
    num_ryhthms = {2: '双押词', 3: '三押词', 4: '四押词'}
    for i in lens:
        try:
            head = num_ryhthms[i]
        except KeyError:
            head = '俗语词 ({}字)'.format(i)
        print('>>> {}:\n{}\n'.format(head, candidates[i]))


if __name__ == '__main__':
    generate_rhythms()