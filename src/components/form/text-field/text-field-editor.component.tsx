import React, {useEffect, useRef, useState} from 'react';
import {ITextFieldProps} from "./text-field.props";
import {useFormContext} from "react-hook-form";
import {ContentState, convertToRaw, Editor, EditorState, RichUtils} from "draft-js";
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import './text-field-editor.css';
import {TextFieldEditorButton} from "./text-field-editor-button.component";

export const TextFieldEditor = (props: ITextFieldProps<string>) => {
    const editor = useRef<Editor>(null);

    const {setValue} = useFormContext();

    useEffect(() => editor?.current?.focus(), []);

    const [editorState, setEditorState] = useState(() => {
        if (props.field.value || props.field.defaultValue) {
            const blocksFromHtml = htmlToDraft(props.field.value || props.field.defaultValue);
            const {contentBlocks, entityMap} = blocksFromHtml;
            const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
            return EditorState.createWithContent(contentState);
        } else {
            return EditorState.createEmpty();
        }
    });

    return (

        <div className="text-field-editor">
            <div className="text-field-editor__toolbar">
                <TextFieldEditorButton icon="bold"
                                       value={editorState.getCurrentInlineStyle().contains('BOLD')}
                                       onClick={() => setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'))}/>
                <TextFieldEditorButton icon="list-ul" onClick={() => setEditorState(RichUtils.toggleBlockType(editorState, 'unordered-list-item'))}/>
                <TextFieldEditorButton icon="list-ol" onClick={() => setEditorState(RichUtils.toggleBlockType(editorState, 'ordered-list-item'))}/>
            </div>
            <Editor
                ref={editor}
                editorState={editorState}
                onChange={(editorState) => {
                    const rawContentState = convertToRaw(editorState.getCurrentContent());

                    const markup = draftToHtml(
                        rawContentState
                    );

                    setValue(props.field.name, markup);
                    props.field.value = markup;
                    setEditorState(editorState);
                    props.onChange();
                }}
            />
        </div>
    )
};

