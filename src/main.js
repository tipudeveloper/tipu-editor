import kaplay from "kaplay";
// import "kaplay/global"; // uncomment if you want to use without the k. prefix

const k = kaplay({
    width: 1280,
    height: 720,
    letterbox: true,
});

k.loadRoot("./"); // A good idea for Itch.io publishing later
k.loadSprite("cursor", "sprites/cursor.png");

scene("main", () => {
    const tileSize = 80;
    // grid based mouse
    const cursor = add([
        sprite("cursor"), // sprite
        pos(),
        anchor("topleft"),
        {
            update() {
                // Get mouse position and snap to grid
                const mouseX = Math.floor(k.mousePos().x / tileSize) * tileSize;
                const mouseY = Math.floor(k.mousePos().y / tileSize) * tileSize;
                this.pos.x = mouseX;
                this.pos.y = mouseY;
            }
        }
    ]);
    onClick(() => {
        debug.log("clicked at ", cursor.pos);
    });
});

go("main");