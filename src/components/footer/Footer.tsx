/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { FaInstagram } from "react-icons/fa";
import { LiaTelegram } from "react-icons/lia";
import { SlSocialFacebook } from "react-icons/sl";
import { RiTwitterXFill } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import { Box } from "@mui/material";

import { Link } from "react-router-dom";

import "./footer.scss";
import QuickAction from "components/quick-action/QuickAction";
import { Heading } from "@chakra-ui/react";

const Footer = () => {

	return (
		<section className="footer-container" data-testid="footer-container">
			<section className="footer_text-content">
				<article>
					<h1>Don't miss out !</h1>
					<p data-testid="footer-subscription-paragraph">
						Subscribe to any of the exclusive offers. Contact us via our live chat service for more information.
					</p>
				</article>
			</section>

			<section className="footer_signature" data-testid="footer-signature">
				<Box>
					{/* <img
						src={
							"https://res.cloudinary.com/maesan-product/image/upload/v1698565851/fx-factor/logo-short-clipped_bmuu6l.png"
						}
						alt="fx-factor-logo"
						className="footer_logo-short"
					/> */}
					<Heading>ZNF</Heading>
				</Box>
				<p>
					{" "}
					<MdLocationPin size={20} title="location-icon" /> Texas, United states
				</p>
				<div className="footer_media">
					<span className="footer_social-media_icons">
						<Link
							to="https://x.com/Fx_Factor?t=U_piOfAxgEJOgLUHjUwTig&s=09"
							target="_blank"
						>
							<RiTwitterXFill title="twitter-icon" />
						</Link>
					</span>
					<span className="footer_social-media_icons">
						<Link
							to="https://instagram.com/trade.fxfactor?igshid=YTQwZjQ0NmI0OA=="
							target="_blank"
						>
							<FaInstagram title="instagram-icon" />
						</Link>
					</span>
					<span className="footer_social-media_icons">
						<Link to="https://t.me/+oq9BDZt0rk4zMDJk" target="_blank">
							<LiaTelegram title="telegram-icon" />
						</Link>
					</span>
					<span className="footer_social-media_icons">
						<Link
							to="https://www.facebook.com/profile.php?id=61552635560767&mibextid=JRoKGi"
							target="_blank"
						>
							<SlSocialFacebook title="facebook-icon" />
						</Link>
					</span>
				</div>
			</section>
			<div className="footer-copyright">
				<p>copy right {new Date().getFullYear()} ZeniFinance</p>
			</div>
			<div className="quick-action-container" data-testid="footer-quick-action">
				<QuickAction />
			</div>
		</section>
	);
};

export default Footer;
