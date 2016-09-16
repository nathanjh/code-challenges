require_relative '../pop_growth'

describe Population do
  it 'can calculate the number of years needed to
   reach a given population based on a rate of growth,etc.' do
    num_years = Population.nb_year(1500, 5, 100, 5000)
    expect(num_years).to eq 15
  end
end
