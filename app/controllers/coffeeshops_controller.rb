class CoffeeshopsController < ApplicationController

  def index
    @coffeeshops = Coffeeshop.all
    render component: "coffeeshops", props: {coffeeshops: @coffeeshops}
  end

  def show
    @coffeeshop = Coffeeshop.find(params[:id])
    @roasts = @coffeeshop.roasts

    render component: "coffeeshop", props: {coffeeshop: @coffeeshop, roasts: @roasts}
  end

  def edit
    @coffeeshop = Coffeeshop.find(params[:id])
    @roasts = @coffeeshop.roasts

    render component: "coffeeshop_edit", props: {coffeeshop: @coffeeshop, roasts: @roasts}
  end

  def update
    coffeeshop = Coffeeshop.find(params[:id])
    if coffeeshop.update(name: params[:coffeeshop][:name], location: params[:coffeeshop][:location])
      redirect_to coffeeshops_path
    else 
      render component: "coffeeshop_edit", props: {coffeeshop: @coffeeshop, roasts: @roasts}
    end
  end

  def new
    # render json: {coffeeshops: coffeeshop.all}
    render component: "coffeeshop_new"
  end

  def create
    coffeeshop = Coffeeshop.new(name: params[:coffeeshop][:name], location: params[:coffeeshop][:location])
    if coffeeshop.save
      redirect_to coffeeshops_path
    else render component: "coffeeshop_new"
    end
  end

  def destroy
    # render component: "NoteDelete"
    @coffeeshop = Coffeeshop.find(params[:id])
    @coffeeshop.destroy

    redirect_to coffeeshops_path 
  end

end
