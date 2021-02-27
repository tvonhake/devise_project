class CoffeeshopsController < ApplicationController

  def index
    @coffeeshops = Coffeeshop.all
    render component: "coffeeshops", props: {coffeeshops: @coffeeshops}
  end

  def show

  end

  def new
    
  end

  def create

  end

  def edit

  end

  def update
    
  end

  def delete

  end

end
