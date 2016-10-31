# @benches.each do |bench|
#   json.set! bench.id do
#       json.partial! 'api/benches/bench', bench: bench
#   end
# end

json.array! @benches do |bench|
  json.partial! 'api/benches/bench', bench: bench
end
