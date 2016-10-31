class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true

  def getPos
    [self.lat. self.lng]
  end

end
