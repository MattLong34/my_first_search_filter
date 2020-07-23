class DogsController < ApplicationController

  def index
    if params[:search]
      @dogs = Dog.where('name LIKE ?', "%#{params[:search]}%")
    else 
      @dogs = Dog.all
    end
    render json: @dogs
  end
end
