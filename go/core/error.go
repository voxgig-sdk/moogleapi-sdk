package core

type MoogleapiError struct {
	IsMoogleapiError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewMoogleapiError(code string, msg string, ctx *Context) *MoogleapiError {
	return &MoogleapiError{
		IsMoogleapiError: true,
		Sdk:              "Moogleapi",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *MoogleapiError) Error() string {
	return e.Msg
}
