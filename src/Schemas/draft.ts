// This is referrence to the database
import mongoose, { Schema, model, Document } from "mongoose"

//Type data
export interface Draft {
    usr_id: string;
    content: {
        title: string;
        description: string;
        body: string;
        category: string;
        tags: string;
    };
    settings: {
        link: string;
        img_url: string;
        publishedOn: string | null;
    };
}


//Schema [Table in SQL terms]
// we are using mongoose so it will handle the schema and will create a referrence in memory 
// later we can use mongoose function and perform operations using it
const DraftSchema = new Schema<Draft>({
    usr_id: mongoose.SchemaTypes.String,
    content: {
        title: mongoose.SchemaTypes.String,
        description: mongoose.SchemaTypes.String,
        body: mongoose.SchemaTypes.String,
        category: mongoose.SchemaTypes.String,
        tags: mongoose.SchemaTypes.String
    },
    settings: {
        link: mongoose.SchemaTypes.String,
        img_url: mongoose.SchemaTypes.String,
        publishedOn: { type: mongoose.SchemaTypes.String, default: Date.now() },
    },
},
{
    timestamps: true
});

export default model('Draft', DraftSchema);
