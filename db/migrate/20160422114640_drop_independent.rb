class DropIndependent < ActiveRecord::Migration
  def up
    drop_table :independent_consultants
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
