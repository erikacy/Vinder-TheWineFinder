class User < ApplicationRecord

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :first_name, presence: true
  validates :last_name, presence: true

  has_many :likes
  has_many :wines, through: :likes

  def recommend_wines(user)
    other_users = User.where.not(id: self.id)
    recommended = []
    other_users.each do |user|
      common_wines = user.wines & self.wines
      # weight = common_wines.count.to_f/user.wines.count
       (user.wines - common_wines).each do |wine|
         recommended << wine
      #   # recommended[wine] += weight
        end
      # recommended_wines = (user.wines - common_wines)
      # recommended.concat(recommend_wines)
    end
    # sorted_recommend = recommended.sort_by { |key, value| value}.reverse
    recommended
  end

  # def recommend_wines(user)
  #   other_users = User.where.not(id: self.id)
  #   recommended = []
  #   other_users.each do |user|
  #     common_wines = user.wines & self.wines
  #     # weight = common_wines.count.to_f/user.wines.count
  #     # (user.wines - common_wines).each do |wine|
  #     #   recommended << wine
  #     #   # recommended[wine] += weight
  #     # end
  #     recommended_wines = (user.wines - common_wines)
  #     recommended.concat(recommend_wines)
  #   end
  #   # sorted_recommend = recommended.sort_by { |key, value| value}.reverse
  #   recommended
  # end



end
