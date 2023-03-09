var buttonData ={
	info:{
		src:`images/Button.png`
	},
	states:{
		//The idle animation 
    	idle:
		{
			fps:15,
			cycle:true,
			frames:
			[
				{width:443, height:101, startX:0, startY:0},
				{width:443, height:101, startX:443, startY:0}
				
			]
		},
        hover:
		{
			fps:15,
			cycle:true,
			frames:
			[
				{width:443, height:101, startX:443, startY:0}
				
			]
		}
    }
}