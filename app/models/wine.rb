class Wine < ApplicationRecord
  validates :country, presence: true
  validates :description, presence: true
  validates :score, presence: true
  validates :price, presence: true
  validates :province, presence: true
  validates :title, presence: true
  validates :variety, presence: true
  validates :winery, presence: true

  has_many :likes
  has_many :users, through: :likes

  include SimpleRecommender::Recommendable
  similar_by :users
end
