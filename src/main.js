import kaplay from "kaplay";
// import "kaplay/global"; // uncomment if you want to use without the k. prefix

const k = kaplay({
    width: 1280,
    height: 720,
    letterbox: true,
});

k.loadRoot("./"); // A good idea for Itch.io publishing later
loadSprite("cursor", "sprites/cursor.png");
loadSprite("grass", "sprites/grass.png");
loadSprite("ground", "sprites/ground.png");

scene("main", () => {
    const tileSize = 80;
    var currentTile = "grass";
    // grid based mouse
    onKeyDown("1", () => {
        currentTile = "grass";
    });
    onKeyDown("2", () => {
        currentTile = "ground";
    });
    onClick(() => {
        if (currentTile === "grass") {
            add([
                sprite("grass"),
                pos(cursor.pos.x, cursor.pos.y),
                anchor("topleft"),
                scale(10),
            ]);
        }
        if (currentTile === "ground") {
            add([
                sprite("ground"),
                pos(cursor.pos.x, cursor.pos.y),
                anchor("topleft"),
                scale(10),
            ]);
        }
    });
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
});

go("main");