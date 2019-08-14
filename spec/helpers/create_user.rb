def create_user
  visit "/"
  click_link "Sign up now!"
  fill_in "Username", with: "tim"
  fill_in "Email", with: "tim@tim.tim"
  fill_in "Password", with: "chuckles"
  click_button "Submit"
end
