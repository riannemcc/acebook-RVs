require 'rails_helper'

RSpec.feature "Users", type: :feature do
  scenario "Can sign up" do
    create_user
    expect(page).to have_content("tim")
  end
end
