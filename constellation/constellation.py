import json

class Constellation:
    # type StarType = dict[int, int]
    def __init__(self, name, pic_url):
        self.name = name
        self.image = pic_url
        self.stars = {}
    
    def add_star(self, star_name, progress, questions):
        self.stars[star_name] = {
            "progress": progress, 
            "questions": questions,
        }
    
    def update_star(self, star_name, progress):
        self.stars[star_name].progress = progress
    
    def stars_dict(self):
        stars_d = {}
        for s in self.stars:
            stars_d[s] = self.stars[s].to_dict()
        return stars_d

    @staticmethod
    def from_dict(source):
        data = json.loads(str(source))
        c = Constellation(data["name"], data["image"])
        stars = data["stars"]
        for star in stars:
            c.add_star(star, stars[star]["progress"], stars[star]["questions"])
        return c

    def to_dict(self):
        d = {
            "name": self.name,
            "image": self.image,
            "stars": self.stars
        }
        return d
    
    def __repr__(self) -> str:
        return str(self.to_dict()).replace('\'', '\"')

if __name__ == "__main__":
    c = Constellation("cass", "dkfka")
    c.add_star("first checkpoint", 0, [])
    x = c.to_dict()
    x = str(x).replace('\'', '\"')
    y = Constellation.from_dict(x)
    print(y.to_dict())
