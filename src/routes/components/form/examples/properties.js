export const MultiSelectProperties=[
 {
  name:"title",
  description:"Label of the Selction Component on Top"
 },
 {
  name:"source",
  description:"Data provided for selection"
 },
 {
  name:"target",
  description:"Selected elements"
 },
 {
  name:"itemId",
  description:"For complex object a unique identifier is needed"
 },
 {
  name:"name",
  description:"Display value from the complex object"
 },
 {
  name:"isComplex",
  description:"Set the value to true, when the incoming data so the source complex is"
 }
]

/**
 * 
 * title="Required input fields"
		source={Countries}
		bind:target
		itemId="code"
		name="name"
		isComplex={true}
 */