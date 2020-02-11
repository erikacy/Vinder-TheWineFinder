class CreateWines < ActiveRecord::Migration[5.2]
  def change
    create_table :wines do |t|
      t.string :country, null: false
      t.text :description, null: false
      t.string :designation
      t.integer :score, null: false, numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 100}
      t.integer :price, null: false
      t.string :province, null: false
      t.string :region
      t.string :title, null: false, uniqueness: true
      t.string :variety, null: false
      t.string :winery, null: false

      t.timestamps null: false
    end
  end
end
