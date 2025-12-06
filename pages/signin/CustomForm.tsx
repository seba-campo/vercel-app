import { FormWrapper } from "./signInStyles"
import { Button } from "../../components"

export const CustomForm = ()=>{
    return (
        <div style={{ maxWidth: "400px", margin: "0 auto", padding: "2rem" }}>     
            <FormWrapper>
                <h1>Ingresar</h1>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: "1rem" }}>
                        <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem" }}>
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <Button type="submit" variant="secondary"style={{width: "100%"}}>
                        Ingresar
                    </Button>
                </form>
            </FormWrapper>
        </div>
    )
}