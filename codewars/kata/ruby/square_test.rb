module Square
  module_function

# specifically not using Math.sqrt
  def square?(n)
    result = false
    if n > 1
      (1..n / 2).each { |num| result = true if num * num == n }
    elsif n.zero? || n == 1
      result = true
    end
    result
  end
end
