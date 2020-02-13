module Recommendation
  def recommend_wines
    other_users = self.class.all.where.not(id: self.id)
    recommended = Hash.new(0)
    other_users.each do |user|
      common_wines = user.wines & self.wines
      weight = common_wines.size.to_f/user.wines.size
      recommended[wine] += weight
    end
  end
end
