/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/

var startButton = new GameObject({width:200});
startButton.img.src="images/Button.png"
startButton.hitBoxWidth=800
console.log(startButton.collisionPoints.right)


var menuBackground = new GameObject();
menuBackground.img.src = "images/MainMenu.png"
menuBackground.width=canvas.width
menuBackground.height=canvas.height

gameStates[`menu`] =function(){

	//Makes the button clickable
	if(startButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			//Changes to the game state
			gameStates.changeState(`level1`)
			sounds.play('bgm',0,true);
			sounds.play('step',0,true);
		}

		//Hover Effect Graffic
		startButton.color = `yellow`
	}
	else
	{
		//Default Button Graphic
		startButton.color = `red`
	}
	
	menuBackground.drawStaticImage();
	startButton.render()
}
	
	
