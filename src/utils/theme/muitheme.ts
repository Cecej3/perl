import { createTheme } from "@mui/material/styles";
import { type Variants } from "framer-motion";

export const theme = createTheme({
	palette: {
		primary: {
			light: "#9f2cf2",
			main: "#4A087A",
			dark: "#4A087A", // applied for css hovers and active events
			contrastText: "#fff",
		},
		secondary: {
			light: "#ff7961",
			main: "#580909",
			dark: "#3c0202", // applied for css hovers and active events
			contrastText: "#000",
		},
	},
});

export const headingVariant = (delay: number) => {
	return {
		hidden: {
			y: -80,
			opacity: 0
		},
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 1,
				delay
			}
		}
	};
};

export const fadeIn = (direction: string, delay: number, duration: number, type?: string) => {
	return {
		hidden: {
			x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
			y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
			opacity: 0
		},
		visible: {
			x: 0,
			y: 0,
			opacity: 1,
			transition: {
				type,
				delay,
				duration,
				ease: "easeOut"
			}
		}
	};
};

export const zoomIn = (delay: any, duration: any) => {
	return {
		hidden: {
			scale: 0,
			opacity: 0
		},
		visible: {
			scale: 1,
			opacity: 1,
			transition: {
				type: "tween",
				delay,
				duration,
				ease: "easeOut"
			}
		}
	};
};

export const slideIn = (direction: string, type: any, delay: any, duration: any) => {
	return {
		hidden: {
			x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
			y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0
		},
		visible: {
			x: 0,
			y: 0,
			transition: {
				type,
				delay,
				duration,
				ease: "easeOut"
			}
		}
	};
};

export const itemVariants = (delay: number) => {
	return {
		hidden: { opacity: 0, y: 30 },
		visible: { opacity: 1, y: 0, transition: { duration: 1, delay } }
	}
};

export const pageVariants = {
	hidden: {
		opacity: 0,
		x: "-100vw"
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			type: "spring",
			mass: 0.5,
			damping: 32,
			delay: 0.4
		}
	},
	exit: {
		opacity: 0,
		x: "-100vw",
		transition: {
			duration: 0.4
		}
	}
};

export const cardVariants = (delay: number): Variants => {
	return {
		offscreen: {
			y: 500
		},
		onscreen: {
			y: 0,
			transition: {
				bounce: 0.4,
				duration: 1,
				delay
			}
		}
	}
};
