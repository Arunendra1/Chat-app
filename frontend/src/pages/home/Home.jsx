import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden' style={{ backgroundColor: 'rgba(17,25,40,0.75)', backdropFilter: 'blur(19px) saturate(180%)' }}>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;
