from flask_script import Shell, Manager
from run import create_app, db
from apps.v1.model import Character, YM, SM, Phrase, Character1,Phrase1,Joke

app = create_app()
manager = Manager(app)


def _make_context():
    return dict(app=app, db=db, Character=Character, YM=YM, SM=SM, Phrase=Phrase, Character1=Character1,Joke=Joke)


manager.add_command('shell', Shell(make_context=_make_context, use_ipython=True))


@manager.command
def test():
    # sm = SM.objects.all()
    # sm = [s.sm for s in sm]
    # ym = YM.objects.all()
    # ym = [y.ym for y in ym]
    # print(ym)
    c = Phrase.objects.all()
    index = 0
    for i in c:
        # csm = i.csm_id
        print(i.c1_id)
        Phrase1(id=i.id, phrase=i.phrase, c1=i.c1_id, c2=i.c2_id, c3=i.c3_id, c4=i.c4_id,c5=i.c5_id,c6=i.c6_id,c7=i.c7_id).save()
        print('第', index + 1, ' ->ok')
        index += 1

if __name__ == '__main__':
    manager.run()
