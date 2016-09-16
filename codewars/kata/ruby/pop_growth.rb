module Population
  def self.nb_year(p0, percent, aug, p)
    rate = percent.to_f / 100
    years_to_p = 0
    current_pop = p0
    while current_pop < p
      current_pop += (current_pop * rate) + aug
      years_to_p += 1
    end
    years_to_p
  end
end
