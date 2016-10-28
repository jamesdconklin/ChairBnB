class Api::SessionsController < ApplicationController
  def create

    @user = User.find_by_credentials(
      user_params[:username],
      user_params[:password]
    )
    if @user
      login(@user)
      render 'api/users/user'
    else
      render json: ["Invalid username or password"], status: 401
    end

  end

  def destroy
    if (user = current_user)
      logout
      render json: {}
    else
      render json: ["No login session found to logout"], status: 404
    end
  end
end
