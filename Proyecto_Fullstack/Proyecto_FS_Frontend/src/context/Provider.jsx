import ConstantsContext from './Context';

const Provider = ({children}) => {
    const contextName = "Nombre";
    const contextFirstName = "Apellido Paterno";
    const contextSecondName = "Apellido Materno";

  return (
    <>
        <ConstantsContext.Provider 
        value={{
            contextName,
            contextFirstName,
            contextSecondName,
        }}>
            {children}
        </ConstantsContext.Provider>
    </>
  )
}

export default Provider;