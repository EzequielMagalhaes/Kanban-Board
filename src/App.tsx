import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from './components/Column';
import DarkModeIconButton from './components/DarkModeIconButton';
import { ColumnType } from './utils/enums';


function App() {
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
			Kanban Board<br/>
			</Heading>
			<DarkModeIconButton position='absolute' top={0} right={2}/>
			<Container maxWidth='container.lg' px={4} py={10}>
				<DndProvider backend={HTML5Backend}>
					<SimpleGrid columns={{base : 1, md: 4 }}>
						<Column column={ColumnType.TO_DO}/>
						<Column column={ColumnType.IN_PROGRESS}/>
						<Column column={ColumnType.BLOCKED}/>
						<Column column={ColumnType.COMPLETED}/>
					</SimpleGrid>
				</DndProvider>	
			</Container>
		</>
	);
}

export default App;
