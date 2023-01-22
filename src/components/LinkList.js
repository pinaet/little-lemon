function LinkList({navigation}) {
	return (
		<div>
			<h3>{navigation.title}</h3>
			<ul>
			{
				navigation.lists.map((list) => (
					<li key={list.name}>{list.name}</li>
				))
			}
			</ul>
		</div>
	)
}

export default LinkList;
