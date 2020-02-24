require "rails_helper"

RSpec.describe Api::V1::WinesController, type: :controller do
  let!(:first_user) { User.create(
    first_name: "Bobby",
    last_name: "Jones",
    email: "bobby@example.com",
    password: "password"
  ) }

  let!(:first_wine) { Wine.create(
    country: "New Zealand",
    description: "This is a rather weighty Pinot Noir, still filled with the exuberant fruit of youth—all plums and black cherries, framed with hints of vanilla and spice. Despite the heft, the tannins are soft, making this wine immediately accessible. Drink now–2015.",
    designation: "vineyard",
    score: 89,
    price: 29,
    province: "Central Otago",
    region: "",
    title: "Prophet's Rock 2007 Pinot Noir (Central Otago)",
    variety: "Pinot Noir",
    winery: "Prophet's Rock",
    color: "Pale Ruby",
    image: "https://vinderapp.s3.amazonaws.com/pale+ruby.png"
  ) }

  describe "GET#show" do
    it "should return the wine and their attributes" do
      sign_in first_user

      get :show, params: {id: first_wine.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json["wine"]["country"]).to eq "New Zealand"
      expect(returned_json["wine"]["description"]).to eq "This is a rather weighty Pinot Noir, still filled with the exuberant fruit of youth—all plums and black cherries, framed with hints of vanilla and spice. Despite the heft, the tannins are soft, making this wine immediately accessible. Drink now–2015."
      expect(returned_json["wine"]["designation"]).to eq "vineyard"
      expect(returned_json["wine"]["score"]).to eq 89
      expect(returned_json["wine"]["price"]).to eq 29
      expect(returned_json["wine"]["province"]).to eq "Central Otago"
      expect(returned_json["wine"]["region"]).to eq ""
      expect(returned_json["wine"]["title"]).to eq "Prophet's Rock 2007 Pinot Noir (Central Otago)"
      expect(returned_json["wine"]["variety"]).to eq "Pinot Noir"
      expect(returned_json["wine"]["winery"]).to eq "Prophet's Rock"
      expect(returned_json["wine"]["color"]).to eq "Pale Ruby"
      expect(returned_json["wine"]["image"]).to eq "https://vinderapp.s3.amazonaws.com/pale+ruby.png"
    end
  end
end
