class User < ApplicationRecord

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :first_name, presence: true
  validates :last_name, presence: true

  has_many :likes
  has_many :wines, through: :likes

  def recommend_wines
    other_users = User.where.not(id: self.id)
    recommended = { user_id: null, weight: 0}
    other_users.each do |user|
      common_wines = user.wines & self.wines
      weight = common_wines.count.to_f/user.wines.count
      if weight > recommended["weight"]
        recommended[:used_id] = user.id
        recommended[wine] += weight
      end
    end
  end

end
