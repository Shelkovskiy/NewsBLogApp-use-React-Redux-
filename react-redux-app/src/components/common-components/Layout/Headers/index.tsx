import React, { useCallback } from "react";
import styled from "styled-components";
import Input from "../../Input";
import Button from "../../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import CustomText from "../../Text/index";
import { CustomLnk } from "../../CustomLink/index";
import { Form } from "../../Form/index";
import Image from "./img/logo.png";
interface IHeader {
	background?: string;
	margin?: string;
	padding?: string;
}

const HeaderBlock = styled.header<IHeader>`
	background: ${(props) => props.background || "none"};
	margin: ${(props) => props.margin || "start"};
	padding: ${(props) => props.padding || "0"}px;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	top: 0px;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Header = () => {
	// const [value, setValue] = useState("");
	// const [isLoading, setIsLoading] = useState(false);
	// const [posts, setPosts] = useState<IPost[] | []>([]);
	// useEffect(() => {
	// 	const fetchPosts = async () => {
	// 		try {
	// 			setIsLoading(true);
	// 			const response = await getPostsArr();
	// 			setPosts(response);
	// 		} catch (e) {
	// 			console.error(e);
	// 		} finally {
	// 			setIsLoading(false);
	// 		}
	// 	};
	// 	fetchPosts();
	// }, []);

	// const filterBlogs = posts.filter((post) => {
	// 	return post.title?.toLowerCase().includes(value.toLowerCase());
	// });

	return (
		<HeaderBlock padding="20">
			<CustomLnk to="/mainpage">
				<div>
					<img src={Image} alt="logo" />
				</div>
			</CustomLnk>
			<Form
				width="1300px"
				maxwidth="1300"
				maxheigth="100"
				padding="0"
				margin="auto"
				flexDirection="row"
			>
				<Input
					border="none"
					margin="auto"
					width="100%"
					onChange={useCallback(
						(e: React.ChangeEvent<HTMLInputElement>) =>
							console.log(e.target.value),
						[],
					)}
					height="56px"
					type="search"
				/>
				<CustomLnk to="/searchpage" textDecoration="none">
					<Button background="none" border="none">
						<FontAwesomeIcon icon={faMagnifyingGlass} />
					</Button>
				</CustomLnk>
			</Form>
			<CustomLnk to="/signinpage" textDecoration="none">
				<div>
					<CustomText
						fontfamily="Inter"
						color="rgba(49, 48, 55, 1)"
						fontweight="600"
						lineheight="34"
						fontsize="16"
					>
						Login
					</CustomText>
				</div>
			</CustomLnk>
			{/* <div>
				<List items={filterBlogs} />
			</div> */}
		</HeaderBlock>
	);
};

export default React.memo(Header);
