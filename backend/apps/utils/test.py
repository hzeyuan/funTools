class Mydict(dict):
    def __setattr__(self, key, value):
        self[key] = value
        super().__setattr__(key, value)

    def __getattr__(self, item):
        self[item] = self.__class__()
        self.__setattr__(item, Mydict())
        return super().__getitem__(item)

    def only(self, *args):
        """限制特定字段"""
        this = self.copy()
        if args: list(map(this.pop, list(args)))
        return this

    def exclude(self, *args):
        """排除特定字段"""
        this = self.copy()
        if args: list(map(this.pop, list(args)))
        return this


if __name__ == '__main__':
    # mydict = Mydict()
    # mydict.a = 1
    # mydict.b = 2
    # mydict.c.d = 3
    # print(mydict)
    # print(mydict.c)
    d = Mydict({1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8})
    print(d)
    print(d.only(1, 2, 3, 4))
    print(d)
