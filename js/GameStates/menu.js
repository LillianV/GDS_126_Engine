/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/

var startButton = new GameObject({width:443, height:101, y:300}).makeSprite(buttonData);
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
		//startButton.color = `yellow`
		startButton.changeState('hover')
		canvas.style.cursor='pointer';
	}
	else
	{
		//Default Button Graphic
		//startButton.color = `red`
		startButton.changeState('idle')
		canvas.style.cursor='auto';
	}
	
	menuBackground.drawStaticImage();
	startButton.drawSprite();
}
	
	
