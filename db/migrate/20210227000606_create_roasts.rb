class CreateRoasts < ActiveRecord::Migration[6.1]
  def change
    create_table :roasts do |t|
      t.string :name
      t.string :profile
      t.belongs_to :coffeeshop, null: false, foreign_key: true

      t.timestamps
    end
  end
end
