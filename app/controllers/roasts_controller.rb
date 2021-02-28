class RoastsController < ApplicationController
  # get list of roasts at coffee shop
  def index
    @coffeeshop = Coffeeshop.find(params[:coffeeshop_id])
    @roasts = @coffeeshop.roasts

    puts @roasts
    render component: "roasts",  props: {roasts: @roasts, coffeeshop: @coffeeshop}
  end

  def show
    @coffeeshop = Coffeeshop.find(params[:coffeeshop_id])
    @roast = @coffeeshop.roasts.find(params[:id])

    puts @roast
    render component: "roast", props: {roast: @roast, coffeeshop: @coffeeshop}
  end
  
  
  def new
    @coffeeshop = Coffeeshop.find(params[:coffeeshop_id])
    render component: "roast_new", props: {coffeeshop: @coffeeshop}
  end

  def create
    @coffeeshop = Coffeeshop.find(params[:coffeeshop_id])
    roast = @coffeeshop.roasts.new(roast_params) 
    
    if roast.save
      redirect_to coffeeshop_roasts_path
    else render component: "roast_new", props: {coffeeshop: @coffeeshop}
    end
  end


  def edit
    @coffeeshop = Coffeeshop.find(params[:coffeeshop_id])
    @roast = @coffeeshop.roasts.find(params[:id])
  
    render component: "roast_edit", props: {coffeeshop: @coffeeshop, roast: @roast}
  end

  def update
    roast = Roast.find(params[:id])
    if roast.update(quantity: params[:roast][:quantity], comment: params[:roast][:comment])
      redirect_to coffeeshop_roasts_path
    else 
      render component: "roast_edit", props: {coffeeshop: @coffeeshop, roasts: @roasts}
    end
  end


  def destroy
    # render component: "NoteDelete"
    @coffeeshop = Coffeeshop.find(params[:coffeeshop_id])
    @roast = @coffeeshop.roasts.find(params[:id])
    @roast.destroy

    redirect_to coffeeshop_roasts_path 
  end




end
