/obj/structure/flora/grass/wasteland
	icon = 'icons/fallout/flora/flora.dmi'
	icon_state = "tall_grass_1"

/obj/structure/flora/grass/wasteland/New()
	..()

	icon_state = "tall_grass_[rand(1, 8)]"//16)]"

/obj/structure/flora/tree/wasteland
	name = "dead tree"
	icon = 'icons/fallout/flora/trees.dmi'
	icon_state = "deadtree_1"

/obj/structure/flora/tree/wasteland/New()
	icon_state = "deadtree_[rand(1, 6)]"
	..()

/obj/structure/flora/tree/wasteland/attackby(obj/item/weapon/W, mob/user, params)
	..()
	if(cut)
		icon = 'icons/fallout/flora/trees.dmi'
		icon_state = "tree_stump"

/obj/structure/flora/tree/tall
	name = "dead tree"
	icon = 'icons/fallout/flora/talltrees.dmi'
	icon_state = "tree_1"

/obj/structure/flora/tree/tall/New()
	icon_state = "tree_[rand(1, 3)]"
	..()

/obj/structure/flora/tree/tall/attackby(obj/item/weapon/W, mob/user, params)
	..()
	if(cut)
		icon = 'icons/fallout/flora/talltrees.dmi'
		icon_state = "tree_stump"

/obj/structure/flora/cactus
	name = "bush"
	icon = 'icons/fallout/flora/trees.dmi'
	icon_state = "cactus"