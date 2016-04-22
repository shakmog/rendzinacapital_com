class DropIndependent < ActiveRecord::Migration
  def change
  	drop_table :independent_consultants
  end
end
