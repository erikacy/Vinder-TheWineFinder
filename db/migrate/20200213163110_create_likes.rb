class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.belongs_to :user, null: false
      t.belongs_to :wine, null: false
    end
  end
end
