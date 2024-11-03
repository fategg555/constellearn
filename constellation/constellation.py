class Constellation:
    def __init__(self, name, stars):
        self.name = name
        self.stars = {}
    
    def add_star(self, star):
        self.stars.append(star)
    
    def stars_dict(self):
        stars_d = {}
        for s in self.stars:
            stars_d[s] = self.stars[s].to_dict()

    @staticmethod
    def from_dict(source):
        pass

    def to_dict(self):
        d = {
            "name": self.name,
            "stars": self.stars_dict()
        }