class Constellation:
    def __init__(self, name):
        self.name = name
        self.stars = {}
    
    def add_star(self, star):
        self.stars[star.name] = star
    
    def stars_dict(self):
        stars_d = {}
        for s in self.stars:
            stars_d[s] = self.stars[s].to_dict()
        return stars_d

    @staticmethod
    def from_dict(source):
        pass

    @staticmethod
    def from_ref(ref):
        pass

    def to_dict(self):
        d = {
            "name": self.name,
            "stars": self.stars_dict()
        }
        return d

if __name__ == "__main__":
    from star import Star, StarData
    s = Star("star1", star_data=StarData())
    c = Constellation("test")
    c.add_star(s)
    print(c.to_dict())