import { Container, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Heading
				fontSize={{base: '4xl', sm:'5xl', md: '6xl'}}
				fontWeight='bold'
				textAlign='center'
				bgGradient='linear(to-l, #7696eb, #08f55e)'
				bgClip='text'
				mt={4}
			>
			Kanban Board<br/>To-do list
			</Heading>
			<Container maxWidth='container.lg' px={4} py={10}>
			</Container>
		</>
	);
}

export default App;