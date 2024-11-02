class Constellation:
    def __init__(self, name, num_stars, stars=None):
        self.name = name
        self.num_stars = num_stars
        self.stars = stars if stars != None else {}