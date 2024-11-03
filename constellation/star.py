class Objective(object):
    def __init__(self, name):
        self.name = name
        self.complete = False
    
    @property
    def completed(self):
        return self.complete
    
    @completed.setter
    def completed(self, val):
        self.complete = val
    
class StarData:
    def __init__(self):
        self.progress = 0.0
        self.objectives = {}
    
    def add_objective(self, objective):
        self[objective.name] = objective

    
    def update_progress(self, objective):
        try:
            self[objective].complete(True)
        except KeyError:
            raise "objective not in star"
        
        c = 0
        for o in self.objectives:
            if self[o].complete:
                c += 1
        
        self.progress = c/len(self.objectives)
    
    def objectives_dict(self):
        d = {}
        for o in self.objectives:
            d[o] = {"name": d[o].name,
                    "completed": d[o].completed}

    def to_dict(self):
        return {
            "progress": self.progress,
            "objectives": self.objectives_dict()
        }
    def __repr__(self) -> str:
        pass


class Star:
    def __init__(self, name, star_data: StarData):
        self.name = name
        self.star_data = star_data
    
    def to_dict(self):
        d = {
            "name": self.name,
            "data": self.star_data.to_dict()
        }
        return d
    
    @staticmethod
    def from_ref(ref):
        return ref
    
    def update():
        pass