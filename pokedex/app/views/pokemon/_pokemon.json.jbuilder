json.extract!(pokemon, :id, :name, :attack, :defense, :poke_type, :moves, :image_url)

if show_toys
  json.toys do
    json.array!(pokemon.toys) do |toy|
      json.partial!("toys/toy", toy: toy)
    end    
  end
end