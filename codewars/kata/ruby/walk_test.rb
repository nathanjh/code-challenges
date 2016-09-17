module Walk
  module_function

  def is_valid_walk(directions)
    valid = false
    x, y = 0, 0
    if directions.length == 10
      directions.each do |direction|
        case direction
        when 'n' then y += 1
        when 's' then y -= 1
        when 'e' then x += 1
        when 'w' then x -= 1
        end
      end
      # p "start: (0, 0) end: (#{x}, #{y})"
      if x == 0 && y == 0
        valid = true
      end
    end
    valid
  end

end

## set starting point (0,0) to zero
## define x, y cooridinate variables equal to starting point
## iterate over instructions
## case statements to handle nsew vectors
## update x, y values accordingly
## if valid walk, sum of endpoint coordinates should equal 0
## compare start and end
