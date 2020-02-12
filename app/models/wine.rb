class Wine < ApplicationRecord
  validates :country, presence: true
  validates :description, presence: true
  validates :score, presence: true
  validates :price, presence: true
  validates :province, presence: true
  validates :title, presence: true
  validates :variety, presence: true
  validates :winery, presence: true
end
