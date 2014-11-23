json.board do
	json.extract!(@board, :id, :title, :user_id)

	json.lists do 
		json.array! @board.lists do |list|
			json.partial!("list", list: list)

			json.cards do
				json.array! list.cards do |card|
					json.partial!("card", card: card)
				end
			end

		end
	end

end