class DropAssociate < ActiveRecord::Migration
  def change
  	drop_table :associates
  end
end
