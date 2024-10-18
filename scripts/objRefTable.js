const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.EightDir,
		C3.Behaviors.scrollto,
		C3.Behaviors.bound,
		C3.Plugins.Keyboard,
		C3.Plugins.Tilemap,
		C3.Behaviors.solid,
		C3.Plugins.Text,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Behaviors.EightDir.Cnds.IsMoving,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Behaviors.EightDir.Acts.SimulateControl,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Text.Acts.SetVisible
	];
};
self.C3_JsPropNameTable = [
	{direcao: 0},
	{"8Direções": 0},
	{CentrarEm: 0},
	{RestritoAoLayout: 0},
	{personagem: 0},
	{Teclado: 0},
	{Mosaico: 0},
	{Sólido: 0},
	{Sprite: 0},
	{Texto: 0},
	{flor: 0},
	{final: 0},
	{Texto2: 0}
];

self.InstanceType = {
	personagem: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	Mosaico: class extends self.ITilemapInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	flor: class extends self.ISpriteInstance {},
	final: class extends self.ISpriteInstance {},
	Texto2: class extends self.ITextInstance {}
}